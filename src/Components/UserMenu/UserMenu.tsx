import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import authSelectors from '../../redux/authSelectors';
import { useLogoutMutation } from '../../redux/authAPI';
import { Container, Avatar, Name } from './UserMenu.styled';

export default function UserMenu() {
  const [logOut] = useLogoutMutation();
  const name = useSelector(authSelectors.getUsername);
  const avatar = useSelector(authSelectors.getAvatar);

  return (
    <Container>
      <Avatar src={avatar} alt="avatar" />
      <Name>Добро пожаловать, {name}</Name>
      <Button
        type="button"
        variant="contained"
        color="primary"
        size="small"
        onClick={logOut}
      >
        Log out
      </Button>
    </Container>
  );
}
