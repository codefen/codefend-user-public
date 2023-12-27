function Logo({ theme }) {
  const handleLogo = () => {
    if (theme == "light") {
      return <img src="/codefend/logo-light.svg" class="w-[120px] w- h-[30px]" />;
    }
    if (theme == "dark") {
      return <img class="w-[120px] h-[30px]" src="/codefend/logo-dark.svg" />;
    }
    if (theme == "shadow") {
      return <img class="" src="/codefend/logo-shadow.png" />;
    }
    if (theme == "aim") {
      return <img class="h-[30px]"src="/codefend/aim-light.svg" />;
    }
  };

  return (
    <>
      <div id="brand" className="brand-img">
        {handleLogo}
      </div>
    </>
  );
}

export default Logo;
