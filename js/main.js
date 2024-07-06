const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function onEmail() {
    contents = $("#mail").val();
    if (!re.test(contents)) {
        alert("SECURITY AHAAHHAHAHAHAHAHAHAHAHHAHAHAHHAH NICE TRY!!!!@1!11!11");
    } else {
        alert("Thanks for subscribing. JUST KIDDING THIS IS A CLOWN WEBSITE!!!!!@@!@!#!@$!@#!%$@!$!@#@!#@!!@!1113121!!!");
        alert("Please wait while we are leaking your e-mail address...");
        alert("Your e-mail "+contents+" has been leaked sucsessfully.");
        alert("🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡");
    }
}