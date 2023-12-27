//Core packages
import { createSignal, createEffect, Show, For, lazy } from "solid-js";
import {
  AiOutlineMail,
  AiFillLock,
  AiFillIdcard,
  AiFillMobile,
  AiFillBank,
} from "solid-icons/ai";
import ApiHandler from "../../Services/apiHandler.jsx";
import history from "../../history.jsx";
import { AuthService } from "../../Services/ApiHandlerV2/auth.handler.js";
import toast from "solid-toast";
import ButtonLoader from "../ButtonLoader/buttonLoader.jsx";
import { countries } from "../../constantData/countries.js";
const Logo = lazy(() => import("../Logo/logo.jsx"));

function MainView() {
  const [email, setEmail] = createSignal("");
  const [phone, setPhone] = createSignal("");
  const [name, setName] = createSignal("");
  const [surname, setSurname] = createSignal("");
  const [companyName, setCompanyName] = createSignal("");
  const [companySize, setCompanySize] = createSignal("");
  const [companyRole, setCompanyRole] = createSignal("");
  const [companyWeb, setCompanyWeb] = createSignal("");
  const [companyCountry, setCompanyCountry] = createSignal("");
  const [isLoading, setIsLoading] = createSignal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const requestParams = {
      lead_fname: name(),
      lead_lname: surname(),
      lead_role: companyRole(),
      lead_email: email(),
      lead_phone: phone(),
      company_name: companyName(),
      company_web: companyWeb(),
      company_size: companySize(),
      company_area: companyCountry(),
      phase: "1",
    };

    return AuthService.registerHandler(requestParams)
      .then((data) => {
        console.log(data);
        toast.success(`signup successful, ${data.info}`);
        history.push("/auth/signin");
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
              <span>
                <a
                  href="#"
                  onClick={() => {
                    history.push("/auth/signin");
                  }}
                >
                  access
                </a>
              </span>
              <span className="active">
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
              <div class="mt-2">
                <input
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  class="full-w"
                  placeholder="First name"
                  required
                />
              </div>

              <div class="mt-2">
                <input
                  type="text"
                  onChange={(e) => {
                    setSurname(e.target.value);
                  }}
                  class="full-w"
                  placeholder="Last name"
                  required
                />
              </div>

              <div class="mt-2">
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
                  type="tel"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  class="full-w"
                  placeholder="Phone number"
                  required
                />
              </div>

              <div class="mt-2">
                <input
                  type="text"
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                  }}
                  class="full-w"
                  placeholder="Company Name"
                  required
                />
              </div>
              <div class="mt-2">
                <input
                  type="text"
                  onChange={(e) => {
                    setCompanyWeb(e.target.value);
                  }}
                  class="full-w"
                  placeholder="Company Web"
                  required
                />
              </div>
              <div class="mt-2">
                <input
                  type="text"
                  onChange={(e) => {
                    setCompanySize(e.target.value);
                  }}
                  class="full-w"
                  placeholder="Company Size"
                  required
                />
              </div>
              <div class="mt-2">
                <input
                  type="text"
                  onChange={(e) => {
                    setCompanyRole(e.target.value);
                  }}
                  class="full-w"
                  placeholder="Company Role"
                  required
                />
              </div>

              <div class="mt-2">
                <select
                  id="countries"
                  onChange={(e) => setCompanyCountry(e.target.value)}
                  class="log-inputs text-sm rounded block w-full p-2.5"
                  required
                >
                  <option value="" selected>
                    Select your country
                  </option>
                  <For each={countries}>
                    {(country) => (
                      <option value={country.value}>{country.label}</option>
                    )}
                  </For>
                </select>
              </div>

              <div class="mt-6">
                <span href="#" class="text-sm text-alt3">
                  I have read and accept the <u>Privacy Policy</u> and <u>Terms of Use.</u>
                </span>
              </div>
              <div class="mt-6">
                <button
                  // onClick={(e) => {
                  //   handleSubmit(e);
                  // }}
                  disabled={isLoading()}
                  type="submit"
                  class="btn btn-primary flex items-center gap-x-2"
                >
                  {isLoading() && <ButtonLoader />}
                  proceed
                </button>

                <div class="mt-6 text-center ">
                  <a
                    href="#"
                    onClick={() => {
                      history.push("/auth/signin");
                    }}
                    class="text-sm codefend-text-red hover:underline"
                  >
                    Already have an account? Sign in
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
