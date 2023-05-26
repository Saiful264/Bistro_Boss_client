import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProviders';


const Login = () => {
    const capchatRef = useRef(null);
    const [disable, setDisable] = useState(true);

    const {signIn} = useContext(AuthContext);

    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])

    const handlerLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log( "email",email, "password",password);

        signIn(email, password)
        .then((result)=>{
          const user = result.user;
          console.log(user);
        })

    }


    const handleValidateCapcha = () =>{
        const user_captcha_value = capchatRef.current.value;
        if(validateCaptcha(user_captcha_value) === true){
            setDisable(false);
        }
    }

  return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse"> 
          <div className="text-center w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handlerLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  ref={capchatRef}
                  name="captcha"
                  placeholder="type the text above"
                  className="input input-bordered"
                />
                <button onClick={handleValidateCapcha} className="btn btn-xs btn-info mt-2">Info</button>
              </div>
              <div className="form-control mt-6">
                <input disabled={disable} className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Login;
