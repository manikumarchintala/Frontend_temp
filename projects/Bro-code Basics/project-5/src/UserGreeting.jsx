import PropTypes from 'prop-types'
function UserGreeting(props){
    const WelcomeMessage=<h2 className="welcome">welcome{props.UserName}</h2>;
    const LoginPropmpt=<h2 className="loginpropmpt">please Login to continue</h2>;
    return (props.isLoggedin ? WelcomeMessage :LoginPropmpt )
};
UserGreeting.PropTypes={
    isLoggedin:PropTypes.bool,
    UserName:PropTypes.string,
};
UserGreeting.defaultProps={
    isLoggedin:false,
    UserName:" Guest",
}
export default UserGreeting;