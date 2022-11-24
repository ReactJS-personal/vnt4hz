import { Grid, TextField, Typography } from "@material-ui/core";
import emailjs from "emailjs-com";
import React, { useState } from "react";
//icon
import { IoIosSend } from "react-icons/io";
//load
import Loader from "react-loader-spinner";
import DataPft from "../../utils/DataPft";
//css
import "./Contact.css";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_yiw4aap",
        e.target,
        "user_Y5orPOB8cvxtsonZPxJiK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  const [mail, setMail] = useState("");
  const [loadingMail, setLoadingMail] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const isInValid = name === "" || email === "" || message === "";

  const handleSendmail = () => {
    setLoadingMail(true);
    setTimeout(() => {
      setLoadingMail(false);
    }, 1800);

    setTimeout(() => {
      setMail("Đã gửi mail ✔️");
    }, 2200);
  };

  return (
    <div className="contactBg">
      <div className="contactBg-zIndex">
        <Grid container spacing={4} className="sec pb_40">
          {/* contact form */}
          <Grid item xs={12} lg={7} className="pb_40">
            <Grid container>
              <Grid item className="Sec-Tlt mb_20">
                {/* <span></span> */}
                <h4 className="Sec-Tlt_text">Contact me</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="96"
                  height="10"
                  viewBox="0 0 80 8"
                  fill="none"
                  className="svgEffect"
                >
                  <path
                    d="M1.36658 3.43961C5.25984 2.21819 9.10198 2.35113 13.042 1.74498C16.5973 1.19801 20.2829 1.33594 23.9226 1.33594C27.3725 1.33594 30.9056 1.5463 34.2891 1.5463C35.5441 1.5463 37.2693 2.05276 38.3912 2.55139C39.6341 3.10379 41.4642 3.25919 42.8089 3.4513C44.602 3.70745 46.3029 3.86034 48.1616 3.86034C49.0606 3.86034 49.9761 3.43961 50.9081 3.43961C51.4475 3.43961 52.841 3.17686 53.3273 2.97213C55.1318 2.21235 56.3597 3.3818 57.5346 4.49145C58.2657 5.18187 59.2379 3.46932 60.0123 3.18249C60.9779 2.82484 61.679 2.53519 62.4783 3.33443C62.7994 3.65557 63.8588 5.51258 64.3716 5.22773C65.485 4.60917 66.7235 4.15447 67.7258 3.33443C69.0587 2.24383 71.3278 2.48068 73 2.38777C74.4626 2.30652 75.525 2.05998 77 2.38777C77.7415 2.55256 78.7556 2.38777 79.518 2.38777C80.2804 2.38777 81.1728 1.74498 82 1.74498"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="2"
                    stroke="hsl(222deg, 100%, 60%)"
                  ></path>
                </svg>
              </Grid>
            </Grid>
            <Grid item xs={12} className="formContact">
              <form onSubmit={sendEmail}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="name"
                      label="Name"
                      onChange={({ target }) => setName(target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="email"
                      label="Your E-mail"
                      onChange={({ target }) => setEmail(target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="message"
                      label="Message"
                      multiline
                      rows={3}
                      onChange={({ target }) => setMessage(target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    {/* <Btn text={'submit'} type="submit"  /> */}
                    <button
                      onClick={handleSendmail}
                      disabled={isInValid}
                      type="submit"
                      value="Send"
                      className="inputBtn"
                    >
                      Send mail <IoIosSend />
                    </button>
                    <div className="mail">
                      {loadingMail ? (
                        <Loader
                          type="ThreeDots"
                          color="#1093f3"
                          height={35}
                          width={75}
                        />
                      ) : (
                        mail
                      )}
                    </div>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
          {/* contact infor */}
          <Grid item xs={12} lg={5}>
            <Grid container>
              <Grid item className="Sec-Tlt mb_20">
                {/* <span></span> */}
                <h4 className="Sec-Tlt_text">My infor</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="99"
                  height="10"
                  viewBox="0 0 83 7"
                  fill="none"
                  className="svgEffect"
                >
                  <path
                    d="M1 3.18471C4.34436 3.18471 7.48008 1 10.8705 1C13.2525 1 15.1058 1.72336 17.3165 2.34614C20.3083 3.18891 22.9386 4.09106 26.1351 3.62607C28.8438 3.23203 31.8901 3.01248 34.5396 3.59297C35.6272 3.83127 36.5433 3.92663 37.55 3.29505C38.1957 2.88991 39.4841 3.07684 39.6651 3.87985C39.809 4.51858 43.0217 2.41818 43.6827 2.09236C44.6745 1.60342 45.105 1.98753 46.0216 2.48958C47.7503 3.43649 49.2982 3.62537 51.259 3.19575C51.6076 3.11937 52.011 3.20318 52.3669 3.18471C52.8876 3.1577 53.3662 2.78749 53.8777 2.78749C54.9479 2.78749 55.8858 2.39027 57 2.39027"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="2"
                    stroke="hsl(222deg, 100%, 60%)"
                  ></path>
                </svg>
              </Grid>

              <Grid item xs={12}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography className="contact">
                      <span>e-mail:</span> {DataPft.email}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className="contact">
                      <span>address:</span> {DataPft.address}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className="contact">
                      <span>blogwebsite:</span>{" "}
                      <a href={DataPft.myWeb}>vinhblog.xyz</a>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className="contact">
                      <span>phone:</span> {DataPft.phone}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Grid container className="contact_infor_container">
                  {Object.keys(DataPft.social).map((key, likekey) => (
                    <Grid item className="contact_infor_social" key={likekey}>
                      <a
                        href={DataPft.social[key].link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {DataPft.social[key].icon}
                      </a>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      {/* <div className='contactMeme'><span className='bottomMeme'>j</span></div> */}
    </div>
  );
}

export default Contact;
