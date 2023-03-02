import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const useTooltip = () => {
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));
  const getStr = (str, len) =>
    str.length > len ? `${str?.slice(0, len)}...` : str;

  const strWithTooltip = ( str, len, style ) => {
    if (str?.length > len) {
      return (
        <LightTooltip title={str}>
          <Typography sx={style}>{getStr(str, len)}</Typography>
        </LightTooltip>
      );
    } else {
    }
  };
  return {
    strWithTooltip,
    getStr
  };
};

export default useTooltip;
