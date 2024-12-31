import DesktopHeader from "./desktop";
import "./styles.css";
import PropTypes from "prop-types";

export default function Cabecalho(props) {
  return <DesktopHeader fullScreen={props.fullScreen} />;
}
Cabecalho.propTypes = {
  fullScreen: PropTypes.bool,
};
