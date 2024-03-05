import { FetchHomePage } from "@/api/functions/cms.api";
import StorySec from "@/components/StorySec/StorySec";
import { Homebanner } from "@/interface/cmsHome";
import assest from "@/json/assest";
import { cardList } from "@/json/mock/cardlist.mock";
import Wrapper from "@/layout/wrapper/Wrapper";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Rating
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";
import Slider from "react-slick";
import styles from "@/styles/cms.module.css";
import { borderRadius } from "@mui/system";
import { Router, useRouter } from "next/router";

export default function Home() {
  const { data, error } = useQuery({
    queryKey: ["Fetch Home"],
    queryFn: FetchHomePage
  });
  console.log("fetching cms data", data);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1
  };

  const router = useRouter();

  return (
    <Wrapper>
      <Box className={styles.image_slider_container} sx={{ margin: "auto" }}>
        <Slider {...settings}>
          {data?.homebanner.map((item) => {
            return (
              <div>
                <img
                  src={item.banner_image_path}
                  alt=""
                  className={styles.bannerImg}
                />
                <Typography className={styles.bannerText1}>
                  {item.banner_title}
                </Typography>
                <Typography className={styles.bannerP}>
                  {item.banner_description.slice(3,47)}
                </Typography>
                <Box className={styles.bannerText2}>
                  <Button
                    sx={{marginLeft:"300px",width:"450px"}}
                    className={styles.HomeBtn1}
                    onClick={() => router.push(`${item.banner_link}`)}
                  >
                    <Typography>{item.banner_link_text}</Typography>
                  </Button>
                </Box>
              </div>
            );
          })}
        </Slider>
      </Box>

      {/* Break---WHAT HELP-------- */}

      <Box >
        <Container sx={{ }}>
          <Typography
            sx={{
              fontSize: "50px",
              textAlign: "center",
              color: "#2c4867",
              margin: "50px"

              
            }}
          >
            
            {data?.what_help_section_title}
          </Typography>

          <Grid container spacing={4} sx={{ textAlign: "center" }}>
            <Grid item xs={4}>
              <img
                src={data?.what_help_section1_image_path}
                height={500}
                width={"50%"}
                style={{ borderRadius: "50%", }}
              />
              <Typography sx={{color:"#2c4867",mt:"5%"}}>{data?.what_help_section1_title}</Typography>
            </Grid>
            <Grid item xs={4}>
              <img
                src={data?.what_help_section2_image_path}
                height={500}
                width={"50%"}
                style={{ borderRadius: "50%"}}
              />
              <Typography sx={{color: "#2c4867",mt:"5%"}}>{data?.what_help_section2_title}</Typography>
            </Grid>
            <Grid item xs={4}>
              <img
                src={data?.what_help_section3_image_path}
                height={500}
                width={"50%"}
                style={{ borderRadius: "50%" }}
              />
              <Typography sx={{color: "#2c4867",mt:"5%"}}>{data?.what_help_section3_title}</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Break----------- */}

      <Box>
        <Container sx={{ 
          backgroundImage: "linear-gradient(to right, #F8CAA6 , #FDD893)",
          
          margin: "70px", height: "20rem", }}>
          <Typography
            sx={{ fontSize: "40px",  textAlign: "center",fontFamily:"fantasy",color:"#2c4867" }}
          >
            {data?.birth_chart_report_title}
          </Typography>
          <p style={{ fontSize: "15px", margin: "20px auto",letterSpacing:"2px",color:"#2c4867" }}>
            {data?.birth_chart_report_desc.slice(3, 305)}
          </p>

          <Button
           sx={{marginLeft:"400px"}}
            variant="contained"
            onClick={() => router.push(`${data?.birth_chart_report_link}`)}
          >
            {data?.birth_chart_report_link_text}
          </Button>
        </Container>
      </Box>

      {/* Break----------- */}

      <Container>
        <Box className={styles.image_slider_container}>
          <Slider {...settings}>
            <div>
              <img
                src={data?.what_client_say_image1_path}
                style={{
                  float: "left",
                  background: "#2c4867"
                }}
              />
              <div style={{ textAlign: "center" }}>
                <Typography sx={{ fontSize: "50px", color: "#2c4867" }}>
                  {data?.what_client_say_title1}
                </Typography>

                <Rating defaultValue={5} precision={0.5} />

                <Typography sx={{ fontSize: "30px", color: "#2c4867" }}>
                  {data?.what_client_say_topic1}
                </Typography>

                <Typography sx={{ fontSize: "30px", color: "#2C4867" }}>
                  {data?.what_client_say_name1}
                </Typography>
                <Typography sx={{ fontSize: "30px", mb: 3, color: "#2C4867" }}>
                  {data?.what_client_say_location1}
                </Typography>
              </div>
            </div>

            <div>
              <img
                src={data?.what_client_say_image2_path}
                style={{
                  float: "left",
                  background: "#2c4867"
                }}
              />
              <div style={{ textAlign: "center" }}>
                <Typography sx={{ fontSize: "50px", color: "#2c4867" }}>
                  {data?.what_client_say_title2}
                </Typography>

                <Rating defaultValue={5} precision={0.5} />

                <Typography sx={{ fontSize: "30px", color: "#2c4867" }}>
                  {data?.what_client_say_topic3}
                </Typography>

                <Typography sx={{ fontSize: "30px", color: "#2C4867" }}>
                  {data?.what_client_say_name2}
                </Typography>
                <Typography sx={{ fontSize: "30px", color: "#2C4867" }}>
                  {data?.what_client_say_location2}
                </Typography>
              </div>
            </div>

            <div>
              <img
                src={data?.what_client_say_image3_path}
                style={{
                  float: "left",
                  background: "#2c4867"
                }}
              />
              <div style={{ textAlign: "center" }}>
                <Typography sx={{ fontSize: "50px", color: "#2c4867" }}>
                  {data?.what_client_say_title3}
                </Typography>

                <Rating defaultValue={5} precision={0.5} />

                <Typography sx={{ fontSize: "30px", color: "#2c4867" }}>
                  {data?.what_client_say_topic3}
                </Typography>

                <Typography sx={{ fontSize: "30px", color: "#2C4867" }}>
                  {data?.what_client_say_name3}
                </Typography>
                <Typography sx={{ fontSize: "30px", color: "#2C4867" }}>
                  {data?.what_client_say_location3}
                </Typography>
              </div>
            </div>
          </Slider>
        </Box>
      </Container>
    </Wrapper>
  );
}
