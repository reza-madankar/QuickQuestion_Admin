import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <h1>Layout</h1>
      <Outlet />
    </>


<main className={`${isMenuExpanded ? '' : 'menu-collapsed'}`}>
<header>
    <img src={TTLogoBlack} alt='Trading Terminal' className='mobile-header-logo' />
    <div className={isSearchMenu === true ? 'left-side show' : 'left-side'} ref={searchRef}>
        {!isMenuExpanded ? (
            <button
                type='button'
                onClick={() => setIsMenuExpanded(true)}
                className='hamburger'
            >
                <i className='menuIcon bbt-hamburger' />
            </button>
        )
            : (
                <button
                    type='button'
                    className='hamburger'
                    onClick={() => setIsMenuExpanded(false)}
                >
                    <i className='closeIcon bbt-cancel' />
                </button>
            )}
        {pages.includes(currentLocation) ? ''
            : <Search isWatchlist={false} />}
    </div>
    <BreakingNews />
    <MarketHours />
</header>
<div className='wrapper'>
    {dayjs(new Date()).isBefore(dayjs('2023-02-28')) ?
        <BannerRollUp />
        :
        <> </>}
    <Outlet />
</div>

</main>
<aside id='aside' className={`${isMenuExpanded ? '' : 'collapsed'}`} ref={asideRef}>
<div className='wrapper'>
    <button
        type='button'
        aria-label='menu toggler'
        className={`${isMenuExpanded ? 'bbt-left-open' : 'bbt-right-open'}`}
        onClick={() => {

            setIsProfileMenu(false);
            setIsMenuExpanded((state) => !state);

        }}
    />
    <Sponsors isMenuExpanded={isMenuExpanded} />
    <Navigation isMenuExpanded={isMenuExpanded} setIsMenuExpanded={setIsMenuExpanded} />
    <ProfilePopup isProfilePopupOpen={isProfilePopupOpen} onClose={setIsProfilePopupOpen} />
    <UserProfile
        isProfileMenu={isProfileMenu}
        setIsProfileMenu={setIsProfileMenu}
        isMenuExpanded={isMenuExpanded}
        setIsMenuExpanded={setIsMenuExpanded}
        setIsProfilePopupOpen={setIsProfilePopupOpen}
    />
</div>
<div
    className='menu-overlay'
    onClick={() => setIsMenuExpanded(false)}
    role='button'
    tabIndex={0}
    onKeyDown={() => { }}
>
    close
</div>
</aside>
  );
};

export default Layout;
