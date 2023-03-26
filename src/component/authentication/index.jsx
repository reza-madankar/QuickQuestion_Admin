import React from "react";
// import { Navigate } from "react-router-dom";
// import toast from 'react-hot-toast';
// import { useUserState } from 'store/slices/user';

export default function Authentication({ children}) {
  // const location = useLocation();
  // const { isUserAuthenticated } = useUserState();
//   const [shouldRedirect, setShouldRedirect] = useState(false);
  // const [popupVisibility, setPopupVisibility] = useState(false);
  // const userLoggedIn = isUserAuthenticated();
  // let timeOut;

  // const listenToScroll = () => {
  //     const winScroll = document.body.scrollTop || document.documentElement.scrollTop
  //     const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  //     const scrolled = Number((winScroll / height).toFixed(2)) * 100;

  //     if (scrolled > 10) {
  //         toast('Please sign up to use Trading Terminal for free!', {
  //             icon: '🔒'
  //         });
  //         setPopupVisibility(true);
  //         window.removeEventListener('scroll', listenToScroll);
  //     }
  // }

  // const listenToTimer = () => {
  //     timeOut = setTimeout(() => {

  //         setPopupVisibility(true);
  //         toast('Please sign up to use Trading Terminal for free!', {
  //             icon: '🔒'
  //         });

  //     }, showTrial ? 1000 : 0);
  // }

  // useEffect(() => {
  //     if (!userLoggedIn) {
  //         const pageName = location.pathname.split('/')[1];

  //         switch (pageName) {

  //             case 'academy': {

  //                 setShouldRedirect(true);
  //                 break;

  //             }
  //             case 'charting':
  //             case 'scanner':
  //             case 'heatmap': {

  //                 listenToTimer();
  //                 setShouldRedirect(false);
  //                 break;

  //             }
  //             case 'calendar':
  //             case 'news':
  //             case 'fundamental':
  //             case 'insider': {

  //                 window.addEventListener('scroll', listenToScroll);
  //                 setShouldRedirect(false);
  //                 break;

  //             }
  //             case 'research':
  //             case 'opinion': {
  //                 const pageHasId = location.pathname.split('/');
  //                 if (pageHasId.length > 2) {

  //                     window.addEventListener('scroll', listenToScroll);
  //                     setShouldRedirect(false);

  //                 }

  //                 break;

  //             }
  //             default: {
  //                 setShouldRedirect(false);
  //                 break;
  //             }

  //         }
  //     }

  //     return () => {
  //         if (timeOut) clearTimeout(timeOut);
  //         window.removeEventListener('scroll', listenToScroll);
  //         setPopupVisibility(false);
  //     };

  //     // we should use location otherwise useEffect not trigger:
  // }, [location]);

  return (
    <>
      {/* {shouldRedirect && (
        <Navigate to="/account/signin" state={{ from: location }} replace />
      )}
      { 
        <>*/}
          {/* {!userLoggedIn &&

                        <div className={`popup-signin ${popupVisibility && 'show'}`}>
                            <div className='mini-signin'>
                                <SigninControl />
                            </div>
                        </div>
                    } */}
          {children}
        {/* </>
      } */}
    </>
  );
}
