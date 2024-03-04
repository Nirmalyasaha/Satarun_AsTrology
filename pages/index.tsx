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
  CardMedia
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";
import Slider from "react-slick";
import styles from "@/styles/cms.module.css";

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

  return (
    <Wrapper>
      <Box className={styles.image_slider_container}>
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
                <Typography>
                  {item.banner_description}
                </Typography>
                <Box  className={styles.bannerText2}>
                  <Button className={styles.btn1}>
                    <Typography>
                      {item.banner_link_text}
                    </Typography>
                  </Button>
                </Box>
              </div>
            );
          })}
        </Slider>
      </Box>
    </Wrapper>
  );
}
