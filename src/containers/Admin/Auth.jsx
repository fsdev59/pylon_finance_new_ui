import React from "react";

const Auth = () => {
  return (
    <div className="container">
      <div id="login">
        <form>
          <fieldset className="clearfix">
            <p>
              <span className="fontawesome-user"></span>
              <input
                type="text"
                value="Username"
                // onBlur="if(this.value == '') this.value = 'Username'"
                // onFocus="if(this.value == 'Username') this.value = ''"
                required
              />
            </p>
            <p>
              <span className="fontawesome-lock"></span>
              <input
                type="password"
                value="Password"
                // onBlur="if(this.value == '') this.value = 'Password'"
                // onFocus="if(this.value == 'Password') this.value = ''"
                required
              />
            </p>
            <p>
              <input type="submit" value="Sign In" />
            </p>
          </fieldset>
        </form>
        <p>
          Not a member? <a href="https://pylon.finance">Sign up now</a>
          <span className="fontawesome-arrow-right"></span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
