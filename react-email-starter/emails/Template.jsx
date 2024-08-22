import React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Tailwind,
  Text,
  Button,
} from "@react-email/components";
const Template = () => {
  "Immersive", "future", "Percision", "Eco-cnsicous", "Customized", "unfor";
  let data = [
    { title: "Immersive", subTitle: "Experience" },
    { title: "Precision", subTitle: "Performance" },
    { title: "Futuristic", subTitle: "Tech Showcase" },
    { title: "Eco-conscious", subTitle: "Entertainment" },
    { title: "Customized", subTitle: "to Theme" },
    { title: "Unforgettable", subTitle: "Impressions" },
  ];
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";

  const main = {
    background: "linear-gradient(180deg, #6403C5, #010101,#000000)",
  };
  const buttonStyle = {
    background:
      "linear-gradient(#140128, #140128) padding-box, linear-gradient(90deg, rgba(112,48,160,1) 0%, rgba(96,225,224,1) 50%, rgba(112,48,160,1) 96%)",
    backgroundColor: "#3570f7",
    border: "2px solid transparent",
    borderRadius: "1px",
    display: "inline-block",
    fontSize: "22px",
  };
  const hrStyle = {
    background: "linear-gradient(to right, #340071, fuchsia, fuchsia, #340071)",
    width: "50%",
    height: "2px",
    border: "none",
    borderRadius: "2px",
  };
  return (
    <Html className="">
      <Head />
      <Preview>Log in with this magic link</Preview>
      <Tailwind>
        <Body className="bg-[#7708e6] m-0 p-0" style={main}>
          <Container className="">
            <div className="">
              <Heading className=" text-white text-center px-8 font-bold font-sans">
                WELCOME <br /> TO THE <br />
                NEXT ERA OF EXPERIENTIAL MARKETING
              </Heading>
            </div>

            <Text className="text-white font-normal mx-4 font-sans font-normal text-base">
              Calling all Marketers,
            </Text>

            <Text className="text-white font-normal mx-4 font-sans text-base">
              We know how important it is to leave <br/> a lasting impression on your
              customers.
            </Text>

            <Text className="text-white font-normal mt-5 mx-4 font-sans text-base">
              Embark on a journey into the future of art, entertainment and
              advertising with our flexible and scalable drone light shows.
            </Text>

            <div className="grid grid-cols-2 gap-2 mx-4">
              {data.map((item, index) => (
                <>
                  <div
                    key={index}
                    className="h-10 flex justify-center items-center"
                    style={buttonStyle}
                  >
                    <Text className="text-white font-bold text-[10px] font-sans">
                      {item.title}
                    </Text>
                    <Text className="text-white text-[10px] ml-1 font-sans">
                      {item.subTitle}
                    </Text>
                  </div>
                </>
              ))}
            </div>

            <div className="flex justify-center my-8 text-white font-bold">
              <Button className="bg-[#501F76] p-3 font-sans">
                TELL ME MORE!!
              </Button>
            </div>
            <div className="flex justify-center text-center ">
              <div className="w-80 flex justify-center">
                <Text className="text-white text-center font-sans text-base">
                  Watch our show reel to experience how we’ve brought visions to
                  life for leading brands around the world.
                </Text>
              </div>
            </div>
            <div className="mx-4">
              <Img
                src="https://botlab-website.s3.us-west-2.amazonaws.com/Templateassets/image+2(1).jpg"
                width="100%"
                height="200"
                alt="img"
                className="mt-5"
                style={buttonStyle}
              />
            </div>

            <div className="w-[340px] mx-auto my-8">
              <Text className="text-white text-center mt-5 mx-2 text-base font-sans">
                Join the ranks of top-tier brands who have already illuminated
                the skies with us, your story deserves the same spotlight.
              </Text>
              {/* <hr className="w-[60%] bg-white p-[1px] border-none" /> */}
              <hr style={hrStyle} />
            </div>
          </Container>
          {/* <img src="https://drive.google.com/file/d/1GVgPsDKZekzwcA4nKRb8Vj3IykjK9TEz/view" alt="" /> */}
          {/* <Img src="https://drive.google.com/file/d/1GVgPsDKZekzwcA4nKRb8Vj3IykjK9TEz"></Img> */}

<div className="flex justify-center">
          <div className="w-80">
          <div className="grid grid-cols-3  mx-5">
            <Img
              src="https://botlab-website.s3.us-west-2.amazonaws.com/Templateassets/image+3.png"
              width=""
              height="36"
              alt="img"
              className="mt-5"
            />
            <Img
              src="https://botlab-website.s3.us-west-2.amazonaws.com/Templateassets/image+4.png"
              width=""
              height="40"
              alt="img"
              className="mt-5 mx-auto"
            />
            <Img
              src="https://botlab-website.s3.us-west-2.amazonaws.com/Templateassets/image+5.png"
              width=""
              height="36"
              alt="img"
              className="mt-5"
            />
          </div>

          <div className="flex justify-center ">
            <Img
              src="https://botlab-website.s3.us-west-2.amazonaws.com/Templateassets/image+6.png"
              width=""
              height="30"
              alt="img"
              className="mt-5"
            />
            <Img
              src="https://botlab-website.s3.us-west-2.amazonaws.com/Templateassets/image+7.png"
              width=""
              height="30"
              alt="img"
              className="mt-5 ml-8"
            />
          </div>
          <div className="flex item-center">
            <Img
              src="https://botlab-website.s3.us-west-2.amazonaws.com/Templateassets/image+11.png"
              width=""
              height="60"
              alt="img"
              className="mt-2 ml-4"
            />
            <Img
              src="https://botlab-website.s3.us-west-2.amazonaws.com/Templateassets/image+12%402x.png"
              width=""
              height="80"
              alt="img"
              className="mt-2 ml-auto mr-4"
            />
          </div>
          </div>

</div>



          <div className="flex justify-center">
            <Button className="bg-[#501F76] p-3 text-white font-bold font-sans">
              LET’S DO THIS
            </Button>
          </div>

          <Img
            src="https://botlab-website.s3.us-west-2.amazonaws.com/Templateassets/image+9.png"
            height="60"
            alt="img"
            className="mt-10 mx-auto"
          />

          <Img
            src="https://botlab-website.s3.us-west-2.amazonaws.com/Templateassets/image+8.png"
            width="100%"
            height="200"
            alt="img"
            className="mt-5"
          />
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Template;
