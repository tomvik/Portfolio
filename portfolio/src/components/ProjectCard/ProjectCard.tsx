import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
// @ts-ignore
import TextInfoContent from "@mui-treasury/components/content/textInfo";
// @ts-ignore
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
// @ts-ignore
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";

const breaking_point = 960 + 233 + 40;

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: "auto",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    maxWidth: 500,
    marginLeft: "auto",
    overflow: "initial",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: spacing(2),
    minWidth: 250,
    [breakpoints.up(breaking_point)]: {
      minWidth: 500,
      flexDirection: "row",
      paddingTop: spacing(2),
    },
  },
  media: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: "48%",
    borderRadius: spacing(2),
    backgroundColor: "#fff",
    "&:after": {
      content: '" "',
      position: "absolute",
      top: spacing(-3),
      left: spacing(5),
      width: "80%",
      height: "48%",
      borderRadius: spacing(2), // 16
      opacity: 0.5,
      backgroundImage: "linear-gradient(147deg, #311b92 0%, #a5a1ac 74%)",
    },
    [breakpoints.up(breaking_point)]: {
      // Where does the 233 come from?
      width: "100%",
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: "translateX(-8px)",
      "&:after": {
        content: '" "',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: spacing(2), // 16
        opacity: 0.5,
        backgroundImage: "linear-gradient(147deg, #311b92 0%, #a5a1ac 74%)",
      },
    },
  },
  content: {
    padding: 24,
    minWidth: 250,
    maxWidth: 351,
    [breakpoints.up(breaking_point)]: {
      minWidth: 250,
      maxWidth: 250,
    },
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
  linkButton: {
    textDecoration: "none",
  },
  button: {
    backgroundImage: "linear-gradient(147deg, #a5a1ac 0%, #311b92  74%)",
    boxShadow: '0px 4px 32px rgba(34, 35, 58, 0.2)',
    borderRadius: 100,
    paddingLeft: 24,
    paddingRight: 24,
    color: '#ffffff'
  }
}));

type ProjectCardProps = {
  heading: string;
  description: string;
  date: string;
  image: string;
  link: string;
};

export const ProjectCard = React.memo(function BlogCard({
  heading,
  description,
  date,
  image,
  link,
}: ProjectCardProps) {
  const styles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia className={styles.media} image={image} />
      <CardContent className={styles.content}>
        <TextInfoContent
          classes={contentStyles}
          overline={date}
          heading={heading}
          body={description}
        />
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className={styles.linkButton}
        >
          <Button className={styles.button}>Learn more</Button>
        </a>
      </CardContent>
    </Card>
  );
});

export default ProjectCard;
