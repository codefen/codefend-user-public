//Core packages
import { createSignal, lazy } from "solid-js";
import history from "../../history.jsx";
import { AuthService } from "../../Services/ApiHandlerV2";
import { isSuccessResponse } from "../../Services/ApiHandlerV2/fetch.js";
import createModal from "../../Store/modal.jsx";
import { isUserAdmin } from "../../utils/helper.js";

//Components
const Logo = lazy(() => import("../Logo/logo.jsx"));

function MainView() {
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [isLoading, setIsLoading] = createSignal(false);
  const { setShowModal, setShowModalStr } = createModal;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const requestParams = {
      provided_email: email(),
      provided_password: password(),
    };

    AuthService.sessionHandler(requestParams)
      .then(({ data, userData }) => {
        console.log({ userData, data });
        const isSuccess = isSuccessResponse(data);
        console.log({ isSuccess });
        if (!isSuccess) {
          throw new Error("Error");
        }

        isUserAdmin(userData)
          ? history.push("/admin/company")
          : history.push("/");
      })
      .catch((error) => {
        console.log({ error });
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
                <a
                  href="#"
                  onClick={() => {
                    history.push("/auth/signin");
                  }}
                >
                  access
                </a>
              </span>
              <span>
                <a
                  href="#"
                  onClick={() => {
                    history.push("/auth/signup");
                  }}
                >
                  new user
                </a>
              </span>
            </div>
            <form onSubmit={handleSubmit}>
              <div class="">
                <input
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  class="full-w"
                  placeholder="Email address"
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
                  placeholder="Password"
                  required
                />
              </div>

              <div class="mt-6">
                <button
                  type="submit"
                  disabled={isLoading()}
                  // onClick={(e) => {
                  //   handleSubmit(e);
                  // }}
                  class="btn btn-primary"
                >
                  proceed
                </button>

                <div class="mt-6 text-center ">
                  <a
                    href="#"
                    onClick={() => {
                      history.push("/auth/signup");
                    }}
                    class="text-sm codefend-text-red"
                  >
                    Don’t have an account yet? Sign up
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainView;
