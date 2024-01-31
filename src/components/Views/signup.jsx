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
import { companySizesList } from "../../constantData/index.js";
const Logo = lazy(() => import("../Logo/logo.jsx"));

function MainView() {
  const [email, setEmail] = createSignal("");
  const [phone, setPhone] = createSignal("");
  const [name, setName] = createSignal("");
  const [referenceNumber, setReferenceNumber] = createSignal("");
  const [surname, setSurname] = createSignal("");
  const [companyName, setCompanyName] = createSignal("");
  const [companySize, setCompanySize] = createSignal("");
  const [companyRole, setCompanyRole] = createSignal("");
  const [companyWeb, setCompanyWeb] = createSignal("");
  const [companyCountry, setCompanyCountry] = createSignal("");
  const [isLoading, setIsLoading] = createSignal(false);
  const [isCompleteSignUp, setIsCompleteSignup] = createSignal(false);

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
        if (data.error != 0) {
          toast.error(data.info);
          return;
        }
        toast.success(`signup successful, ${data?.info ?? ""}`);
        setIsCompleteSignup(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleCompleteSignup = async (e) => {
    e.preventDefault();
    history.push(`/auth/signup/${referenceNumber()}`);
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

            {isCompleteSignUp() ? (
              <form class="signup-confirmation" onSubmit={handleCompleteSignup}>
                <div class="check-mail flex items-center gap-x-4 mt-4 mb-8">
                  <div class="w-40 ">
                    <img
                      class="w-full h-full object-fill"
                      src="/codefend/check_email.png"
                      alt="mail-image"
                    />
                  </div>
                  <div class="flex flex-col gap-y-2">
                    <span class="font-bold text-lg">
                      we have sent you an email with a code!
                    </span>
                    <p>
                      please check your inbox, copy the verification code and
                      paste it in the field below to confirm your email
                    </p>
                  </div>
                </div>
                <div class="mt-2 flex flex-col">
                  <label class="otp-label" htmlFor="otp">
                    Reference Number
                  </label>
                  <input
                    id="otp"
                    type="text"
                    onChange={(e) => {
                      setReferenceNumber(e.target.value);
                    }}
                    class="full-w"
                    name="otp"
                    placeholder="Enter Reference Number here"
                    required
                  />
                </div>
                <div class="mt-6 flex items-center justify-end gap-x-4 ">
                  <button
                    onClick={() => {}}
                    disabled={isLoading()}
                    type="button"
                    class="btn btn-tertiary flex items-center gap-x-2 "
                  >
                    assistance
                  </button>
                  <button
                    disabled={isLoading()}
                    type="submit"
                    class="btn btn-primary flex items-center gap-x-2"
                  >
                    {isLoading() && <ButtonLoader />}
                    proceed
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSubmit}>
                <div class="mt-2">
                  <input
                    type="text"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    class="full-w"
                    name="first_name"
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
                    name="last_name"
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
                    name="email_address"
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
                    name="phone_number"
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
                    name="company_name"
                    placeholder="Company Name"
                    required
                  />
                </div>
                <div class="mt-2">
                  <input
                    type="url"
                    onChange={(e) => {
                      setCompanyWeb(e.target.value);
                    }}
                    class="full-w"
                    name="company_website"
                    placeholder="https://example.com"
                    pattern="https://.*"
                    size="30"
                    required
                  />
                </div>
                <div class="mt-2">
                  <select
                    onChange={(e) => setCompanySize(e.target.value)}
                    class="log-inputs text-sm rounded block w-full p-2.5"
                    name="company_size"
                    required
                  >
                    <option value="" selected>
                      Select Company Size
                    </option>
                    <For each={companySizesList}>
                      {(company) => (
                        <option value={company.value}>{company.label}</option>
                      )}
                    </For>
                  </select>
                </div>
                <div class="mt-2">
                  <input
                    type="text"
                    onChange={(e) => {
                      setCompanyRole(e.target.value);
                    }}
                    class="full-w"
                    name="company_role"
                    placeholder="Company Role"
                    required
                  />
                </div>

                <div class="mt-2">
                  <select
                    id="countries"
                    name="country"
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
                    I have read and accept the <u>Privacy Policy</u> and{" "}
                    <u>Terms of Use.</u>
                  </span>
                </div>
                <div class="mt-6">
                  <button
                    disabled={isLoading()}
                    type="submit"
                    class="btn btn-primary flex items-center gap-x-2"
                  >
                    {isLoading() && <ButtonLoader />}
                    proceed
                  </button>

                  <div class="mt-2 mb-2 text-center ">
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
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default MainView;
