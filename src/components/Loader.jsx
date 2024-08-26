import React, { useEffect } from "react";
import NProgress from "nprogress";
import { useNavigate } from "react-router-dom";
import "nprogress/nprogress.css";
export default function Loader() {
  const navigate = useNavigate();
  useEffect(() => {
    NProgress.start();
    NProgress.inc()
    NProgress.configure({ showSpinner: true,easing:"ease",speed:700,trickleSpeed:500 });
    NProgress.done();
  }, [navigate]);
  return <div className="loader"></div>;
}
