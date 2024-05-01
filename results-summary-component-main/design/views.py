from django.shortcuts import render
from django.template import RequestContext
from django.contrib import messages
import pymysql
from django.http import HttpResponse
from django.core.files.storage import FileSystemStorage
import os
import random
from datetime import date
from geopy.distance import geodesic

global driver, user, usertype, ip, callack, page, start

def Ratings(request):
    if request.method == 'GET':
        output = '<tr><td><font size="" color="black">Driver&nbsp;Name</b></td><td><select name="t1">'
        con = pymysql.connect(host='127.0.0.1',port = 3306,user = 'root', password = 'root', database = 'carpooling',charset='utf8')
        with con:
            cur = con.cursor()
            cur.execute("select username FROM register where user_type='Driver'")
            rows = cur.fetchall()
            for row in rows:
                output += '<option value="'+row[0]+'">'+row[0]+"</option>"
        output += "</select></td></tr>"
        context= {'data1':output}
        return render(request, 'Ratings.html', context)

def RatingsAction(request):
    if request.method == 'POST':
        global user
        driver = request.POST.get('t1', False)
        rating = request.POST.get('t2', False)
        db_connection = pymysql.connect(host='127.0.0.1',port = 3306,user = 'root', password = 'root', database = 'carpooling',charset='utf8')
        db_cursor = db_connection.cursor()
        student_sql_query = "insert into ratings(passenger_name, driver_name,ratings) values('"+user+"','"+driver+"','"+rating+"')"
        db_cursor.execute(student_sql_query)
        db_connection.commit()
        context= {'data':'Ratings accepted! Thank you'}
        return render(request, 'UserScreen.html', context)
    
def ShareLocationAction(request):
    if request.method == 'GET':
        global user
        rid = request.GET.get('rid', False)
        driver = request.GET.get('driver', False)
        passenger_id = 0
        con = pymysql.connect(host='127.0.0.1',port = 3306,user = 'root', password = 'root', database = 'carpooling',charset='utf8')
        with con:
            cur = con.cursor()
            cur.execute("select count(*) FROM passenger")
            rows = cur.fetchall()
            for row in rows:
                passenger_id = row[0]
        passenger_id = passenger_id + 1
        db_connection = pymysql.connect(host='127.0.0.1',port = 3306,user = 'root', password = 'root', database = 'carpooling',charset='utf8')
        db_cursor = db_connection.cursor()
        student_sql_query = "INSERT INTO passenger(passenger_id, ride_int,driver_name,passenger_name,miles_travelled,total_amount,status) VALUES('"+str(passenger_id)+"','"+rid+"','"+driver+"','"+user+"','0','0','waiting')"
        db_cursor.execute(student_sql_query)
        db_connection.commit()
        print(db_cursor.rowcount, "Record Inserted")
        if db_cursor.rowcount == 1:
            context= {'data':'Your request shared with driver with ID '+str(passenger_id)}
            return render(request, 'UserScreen.html', context)
        else:
            context= {'data':'Error in sharing location'}
            return render(request, 'UserScreen.html', context)

def ViewDrivers(request):
    if request.method == 'POST':
        destination = request.POST.get('t1', False)
        latitude_str = request.POST.get('t2', False)
        longitude_str = request.POST.get('t3', False)
        
        # Validate latitude and longitude
        try:
            latitude = float(latitude_str)
            if latitude < -90 or latitude > 90:
                raise ValueError('Latitude must be in the range [-90, 90]')
            
            longitude = float(longitude_str)
            if longitude < -180 or longitude > 180:
                raise ValueError('Longitude must be in the range [-180, 180]')
        except ValueError as e:
            return render(request, 'error.html', {'message': str(e)})
        
        driver_location = [latitude, longitude]
        columns = ['Ride ID','Driver Name','Location Name','Latitude','Longitude','Ride Date','Share Location']
        output = "<table border=1 align=center>"
        font = '<font size="" color="black">'
        
        for i in range(len(columns)):
            output += '<th>'+font+columns[i]+'</th>'
        output += "</tr>"    
        
        con = pymysql.connect(host='127.0.0.1', port=3306, user='root', password='root', database='carpooling', charset='utf8')
        
        with con:
            cur = con.cursor()
            cur.execute("select * FROM ride where status='waiting'")
            rows = cur.fetchall()
            
            for row in rows:
                user_latitude = float(row[3])
                user_longitude = float(row[4])
                if -90 <= user_latitude <= 90 and -180 <= user_longitude <= 180:
                    user_location = [user_latitude, user_longitude]
                    miles = geodesic(driver_location, user_location).miles
                    if miles <= 3:
                        output+='<tr><td>'+font+str(row[0])+'</td>'
                        output+='<td>'+font+str(row[1])+'</td>'
                        output+='<td>'+font+str(row[2])+'</td>'
                        output+='<td>'+font+str(row[3])+'</td>'
                        output+='<td>'+font+str(row[4])+'</td>'
                        output+='<td>'+font+str(row[5])+'</td>'
                        output+='<td><a href=\'ShareLocationAction?rid='+str(row[0])+'&driver='+str(row[1])+'\'><font size=3 color=black>Click Here to Share Location</font></a></td></tr>'
        
        output += "<tr></tr><tr></tr><tr></tr><tr></tr><tr></tr>"
        context= {'data':output}
        return render(request, 'UserScreen.html', context)
    

def ShareLocation(request):
    if request.method == 'GET':
       return render(request, 'ShareLocation.html', {})


def RideCompleteAction(request):
    if request.method == 'POST':
        rid = request.POST.get('t1', False)
        passenger = request.POST.get('t2', False)
        miles = request.POST.get('t3', False)
        total_amount = 10 * float(miles)
        db_connection = pymysql.connect(host='127.0.0.1',port = 3306,user = 'root', password = 'root', database = 'carpooling',charset='utf8')
        db_cursor = db_connection.cursor()
        student_sql_query = "update passenger set status='completed',miles_travelled='"+miles+"',total_amount='"+str(total_amount)+"'  where ride_int='"+rid+"' and passenger_id='"+passenger+"'"
        db_cursor.execute(student_sql_query)
        db_connection.commit()

        db_connection = pymysql.connect(host='127.0.0.1',port = 3306,user = 'root', password = 'root', database = 'carpooling',charset='utf8')
        db_cursor = db_connection.cursor()
        student_sql_query = "update ride set status='completed' where ride_id='"+rid+"'"
        db_cursor.execute(student_sql_query)
        db_connection.commit()
        context= {'data':'Total Fare : '+str(total_amount)}
        return render(request, 'DriverScreen.html', context)

def RideComplete(request):
    if request.method == 'GET':
        global driver
        output = '<tr><td><font size="" color="black">Ride&nbsp;ID</b></td><td><select name="t1">'
        con = pymysql.connect(host='127.0.0.1',port = 3306,user = 'root', password = 'root', database = 'carpooling',charset='utf8')
        ride = []
        with con:
            cur = con.cursor()
            cur.execute("select ride_int FROM passenger where status='accepted' and driver_name='"+driver+"'")
            rows = cur.fetchall()
            for row in rows:
                if str(row[0]) not in ride:
                    ride.append(str(row[0]))
                    output += '<option value="'+str(row[0])+'">'+str(row[0])+"</option>"
        output += "</select></td></tr>"
        output += '<tr><td><font size="" color="black">Passenger&nbsp;ID</b></td><td><select name="t2">'
        con = pymysql.connect(host='127.0.0.1',port = 3306,user = 'root', password = 'root', database = 'carpooling',charset='utf8')
        with con:
            cur = con.cursor()
            cur.execute("select passenger_id FROM passenger where status='accepted' and driver_name='"+driver+"'")
            rows = cur.fetchall()
            for row in rows:
                output += '<option value="'+str(row[0])+'">'+str(row[0])+"</option>"
        output += "</select></td></tr>"        
        context= {'data1':output}
        return render(request, 'RideComplete.html', context)
        

def StartRide(request):
    if request.method == 'GET':
        context= {'data':'Ride Started'}
        return render(request, 'DriverScreen.html', context)

def DriverLocation(request):
    if request.method == 'GET':
       return render(request, 'DriverLocation.html', {})

def index(request):
    if request.method == 'GET':
       return render(request, 'index.html', {})

def Login(request):
    if request.method == 'GET':
       return render(request, 'Login.html', {})

def Register(request):
    if request.method == 'GET':
       return render(request, 'Register.html', {})

def checkUser(username):
    flag = False
    con = pymysql.connect(host='127.0.0.1',port = 3306,user = 'root', password = 'root', database = 'carpooling',charset='utf8')
    with con:
        cur = con.cursor()
        cur.execute("select username FROM register where username='"+username+"'")
        rows = cur.fetchall()
        for row in rows:
            flag = True
            break
    return flag

def DriverLocationAction(request):
    if request.method == 'POST':
        global driver
        location = request.POST.get('t1', False)
        latitude = request.POST.get('t2', False)
        longitude = request.POST.get('t3', False)
        ride_id = 0
        con = pymysql.connect(host='127.0.0.1',port = 3306,user = 'root', password = 'root', database = 'carpooling',charset='utf8')
        with con:
            cur = con.cursor()
            cur.execute("select count(*) FROM ride")
            rows = cur.fetchall()
            for row in rows:
                ride_id = row[0]
        ride_id = ride_id + 1
        today = date.today()
        db_connection = pymysql.connect(host='127.0.0.1',port = 3306,user = 'root', password = 'root', database = 'carpooling',charset='utf8')
        db_cursor = db_connection.cursor()
        student_sql_query = "INSERT INTO ride(ride_id,driver_name,location_name,latitude,longitude,ride_date,status) VALUES('"+str(ride_id)+"','"+driver+"','"+location+"','"+latitude+"','"+longitude+"','"+str(today)+"','waiting')"
        db_cursor.execute(student_sql_query)
        db_connection.commit()
        print(db_cursor.rowcount, "Record Inserted")
        if db_cursor.rowcount == 1:
            context= {'data':'Location details added with ID '+str(ride_id)+" Passenger Requests will arrived here"}
            return render(request, 'DriverWaiting.html', context)
        else:
            context= {'data':'Error in adding location process'}
            return render(request, 'DriverWaiting.html', context)
        

def Signup(request):
    if request.method == 'POST':
        username = request.POST.get('username', False)
        password = request.POST.get('password', False)
        contact = request.POST.get('contact', False)
        email = request.POST.get('email', False)
        address = request.POST.get('vehicle', False)
        user_type = request.POST.get('type', False)
        if checkUser(username) == False:
            db_connection = pymysql.connect(host='127.0.0.1',port = 3306,user = 'root', password = 'root', database = 'carpooling',charset='utf8')
            db_cursor = db_connection.cursor()
            student_sql_query = "INSERT INTO register(username,password,contact,email,vehicle,user_type) VALUES('"+username+"','"+password+"','"+contact+"','"+email+"','"+address+"','"+user_type+"')"
            db_cursor.execute(student_sql_query)
            db_connection.commit()
            print(db_cursor.rowcount, "Record Inserted")
            if db_cursor.rowcount == 1:
                context= {'data':'Signup Process Completed'}
                return render(request, 'Register.html', context)
            else:
                context= {'data':'Error in signup process'}
                return render(request, 'Register.html', context)
        else:
            context= {'data':'Given username already exists'}
            return render(request, 'Register.html', context)

def AcceptRide(request):
    if request.method == 'GET':
        rid = request.GET.get('rid', False)
        pid = request.GET.get('pid', False)
        db_connection = pymysql.connect(host='127.0.0.1',port = 3306,user = 'root', password = 'root', database = 'carpooling',charset='utf8')
        db_cursor = db_connection.cursor()
        student_sql_query = "update passenger set status='accepted' where ride_int='"+rid+"' and passenger_id='"+pid+"'"
        db_cursor.execute(student_sql_query)
        db_connection.commit()
        context= {'data':'Passenger on the way. Please wait here only'}
        return render(request, 'DriverWaiting.html', context)

def DriverWaiting(request):
    if request.method == 'GET':
        question = request.GET.get('mytext', False)
        font = '<font size="" color="black">'
        columns = ['Passenger ID','Ride ID','Driver Name','Passenger Name','Accept Ride']
        output = "<table border=1 align=center>"
        for i in range(len(columns)):
            output += '<th>'+font+columns[i]+'</th>'
        output += "</tr>"    
        con = pymysql.connect(host='127.0.0.1',port = 3306,user = 'root', password = 'root', database = 'carpooling',charset='utf8')
        with con:
            cur = con.cursor()
            cur.execute("select * FROM passenger where status='waiting' and driver_name='"+driver+"'")
            rows = cur.fetchall()
            for row in rows:
                output+='<tr><td>'+font+str(row[0])+'</td>'
                output+='<td>'+font+str(row[1])+'</td>'
                output+='<td>'+font+str(row[2])+'</td>'
                output+='<td>'+font+str(row[3])+'</td>'
                output+='<td><a href=\'AcceptRide?rid='+str(row[1])+'&pid='+str(row[0])+'\'><font size=3 color=black>Click Here to Accept</font></a></td></tr>'                
        output += "<tr></tr><tr></tr><tr></tr><tr></tr><tr></tr>"
        return HttpResponse(output, content_type="text/html")

def UserLogin(request):
    if request.method == 'POST':
        global ip, driver, user, usertype, callack, page
        page = None
        username = request.POST.get('username', False)
        password = request.POST.get('password', False)
        status = 'none'
        con = pymysql.connect(host='127.0.0.1',port = 3306,user = 'root', password = 'root', database = 'carpooling',charset='utf8')
        with con:
            cur = con.cursor()
            cur.execute("select user_type FROM register where username='"+username+"' and password='"+password+"'")
            rows = cur.fetchall()
            for row in rows:
                user_type = row[0]
                if user_type == 'Driver':
                    driver = username
                    page = "DriverScreen.html"
                if user_type == 'Passenger':
                    user = username
                    page = "UserScreen.html"
                status = 'success'                
        if status == 'success':
            callack = request
            output = 'Welcome '+username
            context= {'data':output}
            return render(request, page, context)
        if status == 'none':
            context= {'data':'Invalid login details'}
            return render(request, 'Login.html', context)





        
            
