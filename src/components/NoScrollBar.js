import React, { useEffect, useState, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";

const NoScrollingBarSCSS = import('../assets/style/scroll.scss');

const NoScrollingBar = () => {
    const [scrollBarre, setScrollBar] = useState([]);
    let history = useNavigate() 
  
    useEffect(() => {
      setScrollBar(window.location.pathname)
      console.log(scrollBarre)
    },[history])                
    
        return (
            <div>
            <Suspense fallback={<></>}>
                {(scrollBarre === '/blindtestgeneral') && <NoScrollingBarSCSS />}
            </Suspense>
            </div>
        );
}

export default NoScrollingBar;