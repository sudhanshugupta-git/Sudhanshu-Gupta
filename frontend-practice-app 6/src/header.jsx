
import MovieIcon from '@mui/icons-material/Movie';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

export default function Header() {
  return (
    <header>
      <div className='left_holder'>
        <img src='https://www.codelogicx.com/assets/images/logo.svg' width={150} />
      </div>

      <div className='right_holder'>
        <ul className='menu_holder'>
          <li>
            <a href='#'>
              <MovieIcon />
              Films
            </a>
          </li>
          <li>
            <a href='#'>
              <StorefrontIcon />
              Stores
            </a>
          </li>
          <li>
            <a href='#'>
              <VolunteerActivismIcon />
              Rental
            </a>
          </li>
        </ul>
        <div className='user_profile_holder'>
          CX
        </div>
      </div>
    </header>
  );
}
