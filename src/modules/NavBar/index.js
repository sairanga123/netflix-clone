import react from 'react';
import '../NavBar/Styles/index.scss';
import ProfilePNG from '../../Pictures/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGift, faBell } from '@fortawesome/free-solid-svg-icons';

function NavBar() {

    function handleClick() {
        window.location.assign('https://www.Netflix.com/');
    }

    return (
        <div className="NavBar">
            <div className="NavBar_left">
                <img
                    className="NavBar_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                    alt="Netflix Logo" />
                <p onClick={handleClick}> Home </p>
                <p> TV </p>
                <p> Movies </p>
                <p> New</p>
                <p> My List</p>
            </div>

            <div className="NavBar_right">
                <FontAwesomeIcon className="NavBar_right_icon" icon={faSearch} id="icon_search" />
                <FontAwesomeIcon className="NavBar_right_icon" icon={faGift} id="icon_gift" />
                <FontAwesomeIcon className="NavBar_right_icon" icon={faBell} id="icon_bell" />
                <img
                    className="NavBar_avatar"
                    src={ProfilePNG}
                    alt="avatar"
                />
            </div>
        </div>
    )
}

export default NavBar; 