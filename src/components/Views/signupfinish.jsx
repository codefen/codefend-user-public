//Core packages
import { createSignal, createEffect, Show, For, lazy } from "solid-js";
import { AuthService } from "../../Services/ApiHandlerV2/auth.handler.js";
import toast from "solid-toast";
import { useParams } from "@solidjs/router";
import ButtonLoader from "../ButtonLoader/buttonLoader.jsx";
import jwt_decode from "jwt-decode";
import history from "../../history.jsx";
import { isUserAdmin, setAuth } from "../../utils/helper";
import createUser from "../../Store/user";
const Logo = lazy(() => import("../Logo/logo.jsx"));

function SignUpFinish() {
  const { setUser } = createUser;
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [confirmPassword, setConfirmPassword] = createSignal("");
  const [isLoading, setIsLoading] = createSignal(false);
  const { ref } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password() !== confirmPassword()) {
      return toast.error(
        "Password does not match, Kindly check and try again !!!"
      );
    }
    if (!email() || email() < 0 || email() > 50) {
      return toast.error("Invalid username");
    }

    if (!password() || password().length < 0 || password().length > 50) {
      console.log({ pass: password() });
      return toast.error("Invalid password");
    }

    const requestParams = {
      username: email(),
      password: password(),
      lead_reference_number: ref,
    };

    setIsLoading(true);

    return AuthService.registerFinishHandler(requestParams)
      .then((response) => {
        if (response?.data?.error && response.data.error != 0) {
          return toast.error(response.data.info);
        }

        if (response.status != 200) {
          return toast.error("An error has occurred...");
        }

        if (!response.data.session) {
          return toast.error("Invalid token response...");
        }

        if (!response.data.user) {
          return toast.error("Invalid user response...");
        }

        toast.success("Successfully Added User...");

        const decodedToken = jwt_decode(response.data.session);
        const userData = { ...response.data.user, exp: decodedToken.exp ?? 0 };
        setAuth(response.data.session, userData);
        setUser(userData);

        // return history.push("/");
        return isUserAdmin(userData)
          ? history.push("/admin/company")
          : history.push("/");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <section class="access log-component">
        <div className="container">
          <div className="brand">
            <Logo theme={"shadow"} />
          </div>
          <div className="forms">
            <div className="nav">
              <span className="active">
                <a href="#">finish registration</a>
              </span>
            </div>
            <form onSubmit={handleSubmit}>
              <div class="mt-2">
                <input
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  class="full-w"
                  placeholder="Select Username"
                  required
                />
              </div>

              <div class="mt-2">
                <input
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  class="full-w"
                  placeholder="Select Password"
                  required
                />
              </div>

              <div class="mt-2">
                <input
                  type="password"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  class="full-w"
                  placeholder="Select Confirm Password"
                  required
                />
              </div>

              <div class="mt-6">
                <span href="#" class="text-sm text-alt3">
                  I have read and accept the <u>Privacy Policy</u> and{" "}
                  <u>Terms of Use.</u>
                </span>
              </div>
              <div class="mt-6">
                <button
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                  disabled={isLoading()}
                  type="submit"
                  class="btn btn-primary flex items-center gap-x-2"
                >
                  {isLoading() && <ButtonLoader />}
                  proceed
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUpFinish;
