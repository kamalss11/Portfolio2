import {
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import {
  footerIcons,
  getNavbarDetails,
  socialIcons,
  techIcons,
} from "../utils/utils";
import { Link } from "react-router-dom";
import "./home.css";
import image from "../images/img.jpg";
import about from "../images/about.jpg";
import { motion } from "framer-motion";
import { IoMdSend } from "react-icons/io";

/* Function to get  dimension */

const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    nameErr: "",
    email: "",
    emailErr: "",
    subject: "",
    subjectErr: "",
    phone_number: "",
    phone_numberErr: "",
    message: "",
    messageErr: "",
  });
  const [navLinkActive, setNavLinkActive] = useState("home");
  const [isHamActive, setIsHamActive] = useState(false);
  const [navActive, setNavActive] = useState(false);
  const navRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const sectionRefs = [
    { section: "Home", ref: homeRef },
    { section: "About", ref: aboutRef },
    { section: "Projects", ref: projectRef },
    { section: "Contact", ref: contactRef },
  ];

  window.addEventListener("scroll", () => {});

  /* Function to handle form */

  function handleForm(name, value) {
    let data = { ...formData };

    if (value) {
      if (name === "email") {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        data["emailErr"] = emailPattern.test(value)
          ? ""
          : "Invalid Email Address!";
      }
      data[`${name}` + "Err"] = "";
    } else {
      data[`${name}` + "Err"] = "Required";
    }

    Object.assign(data, {
      [name]: value,
    });
    setFormData({ ...data });
  }

  /* Function to handle form submission */

  const handleProceed = () => {
    let data = { ...formData };

    Object.keys(data)
      .filter((f) => !f.includes("Err"))
      .map((e) => {
        if (!data[e]) {
          data[`${e}` + "Err"] = "Required";
        } else {
          data[`${e}` + "Err"] = "";
        }
      });
    setFormData({ ...data });
  };

  useEffect(() => {
    const handleScroll = () => {
      const { height: navHeight } = getDimensions(navRef.current);
      const scrollPosition = window.scrollY + navHeight + 70;

      if (window.scrollY > 150) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition >= offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== navLinkActive) {
        setNavLinkActive(selected.section);
      } else if (!selected && navLinkActive) {
        setNavLinkActive(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navLinkActive]);

  const scrollTo = (ele) => {
    ele.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <React.Fragment>
      {/* Navbar */}

      <Stack
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDirection={"row"}
        className={`nav-bar ${navActive ? "active" : ""}`}
        ref={navRef}
      >
        <div className="title">
          <h1>Portfolio .</h1>
        </div>

        <Stack
          flexDirection={"row"}
          className={`links ${isHamActive ? "active" : ""}`}
        >
          {getNavbarDetails().map((e) => {
            return (
              <div
                className={`nav-links ${
                  navLinkActive === e.name ? "active" : ""
                }`}
                key={e.name}
                onClick={() => {
                  setIsHamActive(false);
                  scrollTo(
                    sectionRefs.filter((f) => f["section"] === e["name"])[0].ref
                      .current
                  );
                }}
              >
                {e.name}
              </div>
            );
          })}
        </Stack>

        <div
          className={`hamburger ${isHamActive ? "active" : ""}`}
          onClick={() => setIsHamActive(!isHamActive)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Stack>

      <Container>
        {/* Banner */}
        <Stack
          alignItems={"space-evenly"}
          justifyContent={"center"}
          className="banner-container"
          ref={homeRef}
        >
          <Grid className="banner-box" spacing={3} container>
            <Grid item xs={12} sm={12} lg={6}>
              <motion.div
                className="image"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", duration: ".5s", stiffness: 120 }}
              >
                <img src={image} title="Kamalesh S" alt="Kamalesh" />
              </motion.div>
            </Grid>

            <Grid item xs={12} sm={12} lg={6}>
              <div className="info">
                <div className="title">
                  <h3>Hello World , It's me</h3>
                  <h2>KAMALESH S , Web Developer</h2>
                </div>

                <Divider style={{ marginTop: "8px" }} />

                <div className="short-info">
                  <p>
                    An Innovative and detail-oriented Web Developer with 1.5
                    years of professional experience in creating dynamic,
                    user-friendly & progessive web apps.
                  </p>
                </div>

                <Divider style={{ marginTop: "8px" }} />

                <div className="links">
                  {socialIcons().map((e, ind) => {
                    return (
                      <Link key={ind} to={e.url} target="_blank">
                        {e.icon}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </Grid>
          </Grid>
        </Stack>
        {/* About Me */}

        <div className="about-container" ref={aboutRef}>
          <h1 style={{ textAlign: "center" }}>About Me</h1>

          <Grid
            style={{ marginTop: "30px" }}
            spacing={3}
            alignItems={"center"}
            container
            sx={{
              flexDirection: { lg: "row", md: "row", xs: "column-reverse" },
            }}
          >
            <Grid item xs={12} md={6} lg={6}>
              <div className="about-info">
                <p>
                  Kamalesh S, is an Innovative and detail-oriented Web Developer
                  with 1.5 years of professional experience in creating dynamic,
                  user-friendly & progessive web apps. Proficient in front-end
                  technologies such as HTML5, CSS3, JavaScript, and frameworks
                  like React.js , Bootstrap and library like Material UI. Up
                  skilling in back-end development using Node.js. Adopt at
                  collaborating with cross-functional teams to deliver
                  high-quality projects on time. Proven track record of
                  implementing responsive designs for seamless user experiences.
                  Having problem-solving abilities and a passion for staying
                  updated with the latest industry trends and technologies. I
                  work with the team to provide imaginative solutions for our
                  customers. I'm passionate about developing and learning new
                  languages. I want to be in the developing world where I can
                  utilize my skills for the betterment of the organization as
                  well as the society. My strength is my love towards the
                  technology and also a person who believes in working hard so
                  that we may achieve our goals efficiently. Looking forward to
                  work in different environment so that I could expand my
                  knowledge
                </p>
              </div>
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              <div className="about-img">
                <img src={about} />
              </div>
            </Grid>
          </Grid>
        </div>

        {/* Technologies  & Tools */}

        <div className="tech-container" ref={projectRef}>
          <h1 style={{ textAlign: "center" }}>Familiar With</h1>

          <Stack
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            style={{ margin: "100px 0 0" }}
            flexWrap={"wrap"}
            gap={5}
          >
            {techIcons().map((e, index) => {
              return (
                <span
                  style={{ margin: "0 10px", cursor: "pointer" }}
                  className="icons"
                  key={index}
                  title={e.title}
                >
                  {e.icon}
                </span>
              );
            })}
          </Stack>
        </div>
      </Container>

      {/* Contact */}

      <div className="contact-container" ref={contactRef}>
        <h1 style={{ textAlign: "center" }}>Contact Me</h1>

        <Grid container style={{ margin: "50px 0" }}>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            style={{
              textAlign: "center",
              background: "#80808012",
            }}
            sx={{
              padding: {
                xs: "100px 10px",
                md: "10px",
                lg: "10px",
              },
            }}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <h3 style={{ marginBottom: "20px" }}>
              It's time to build something exciting !
            </h3>
            <p style={{ lineHeight: "35px" }}>
              Got a question or feedback ? Contact US !. Here to assist you and
              ensure your experience with us is the best it can be.
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            style={{ background: "black", padding: "20px" }}
          >
            <form style={{ margin: "50px 0 20px" }}>
              <Grid container spacing={1}>
                <Grid item xs={12} lg={6}>
                  <TextField
                    className="inputField"
                    id="standard-basic"
                    label="Name *"
                    value={formData["name"]}
                    helperText={formData["nameErr"]}
                    onChange={(e) => handleForm("name", e.target.value)}
                    variant="standard"
                  />
                </Grid>

                <Grid item xs={12} md={12} lg={6}>
                  <TextField
                    className="inputField"
                    id="standard-basic"
                    type={"email"}
                    label="Email *"
                    value={formData["email"]}
                    helperText={formData["emailErr"]}
                    onChange={(e) => handleForm("email", e.target.value)}
                    variant="standard"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={12} md={12} lg={6}>
                  <TextField
                    className="inputField"
                    id="standard-basic"
                    label="Subject *"
                    value={formData["subject"]}
                    helperText={formData["subjectErr"]}
                    onChange={(e) => handleForm("subject", e.target.value)}
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    className="inputField"
                    id="standard-basic"
                    label="Phone Number *"
                    value={formData["phone_number"]}
                    helperText={formData["phone_numberErr"]}
                    onChange={(e) => handleForm("phone_number", e.target.value)}
                    variant="standard"
                  />
                </Grid>
              </Grid>
              <TextField
                className="inputField"
                id="standard-basic"
                multiline
                label="Message *"
                rows={2}
                value={formData["message"]}
                helperText={formData["messageErr"]}
                onChange={(e) => handleForm("message", e.target.value)}
                variant="standard"
              />

              <Stack justifyContent={"flex-end"} flexDirection={"row"}>
                <Button
                  style={{ background: "white", color: "black" }}
                  variant={"contained"}
                  onClick={() => handleProceed()}
                  endIcon={<IoMdSend />}
                >
                  Send
                </Button>
              </Stack>
            </form>
          </Grid>
        </Grid>
      </div>

      {/* Footer */}

      <div className="footer-container">
        <footer>
          <h3 className="name">Kamalesh S</h3>
          {footerIcons().map((e, ind) => {
            return (
              <Link
                className="footer-icons"
                key={ind}
                target="_blank"
                to={e.url}
              >
                {e.icon}
              </Link>
            );
          })}
          <p className="copyrights">© All Rights Reserved .</p>
        </footer>
      </div>
    </React.Fragment>
  );
}
