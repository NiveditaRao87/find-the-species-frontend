import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Hidden from '@material-ui/core/Hidden'
import Toolbar from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Avatar from '@material-ui/core/Avatar'
import SvgIcon from '@material-ui/core/SvgIcon'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import SearchIcon from '@material-ui/icons/Search'
import './AppBar.css'

const SocialIcon = ({ icon }) => {
  return (
    <Grid item>
      <Avatar>
        <SvgIcon component={icon} />
      </Avatar>
    </Grid>
  )
}

export default function ButtonAppBar() {
  //  hrefs will be added later on and sub menu items
  const appBarMenuItems = [
    { name: 'About' },
    { name: 'Identifier' },
    { name: 'Guides' },
    { name: 'Observations' },
    { name: 'Games & Learning' }
  ]

  const socialIcons = [{id: 1, name: TwitterIcon}, 
  {id: 2, name: FacebookIcon}, 
  {id: 3, name: InstagramIcon}]

  return (
    <AppBar position='static' color='inherit'>
      <Toolbar>
        <Grid container direction='row' alignItems='center'>
          <Grid item xs={1}>
            <Container>
              <IconButton edge='start' color='inherit' aria-label='menu'>
                <MenuIcon />
              </IconButton>
            </Container>
          </Grid>

          <Grid item xs={2}>
            <div>
              <img
                className='Brand'
                src='logo.png'
                alt='Brand'
              />
            </div>
          </Grid>
          <Hidden smDown>
            <Grid
              item
              container
              xs={9}
              direction='column'
              justify='space-between'
              alignContent='space-between'
              className='options-wrapper'
            >
              <Grid
                item
                container
                direction='row'
                alignItems='center'
                justify='flex-end'
                spacing={2}
              >
                <Grid item>
                  <Grid container>
                    {socialIcons.map(socialIcon => (
                      <SocialIcon key={socialIcon.id} icon={socialIcon.name} />
                    ))}
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography>
                    <Link href='#'> Community </Link>
                  </Typography>
                </Grid>
                <Grid item>
                  <ButtonGroup
                    variant='text'
                    aria-label='text primary button group'
                  >
                    <Button>Login</Button>
                    <Button>Sign up</Button>
                  </ButtonGroup>
                </Grid>
              </Grid>

              <Grid item container alignItems='center' justify='flex-end'>
                <Typography>
                  {appBarMenuItems.map(menuItem => (
                    <Link style={{marginRight: '10px'}} href='#' key={menuItem.name}>
                      {menuItem.name}{' '}
                    </Link>
                  ))}
                </Typography>
                <IconButton edge='end' aria-label='search' color='inherit'>
                  <SearchIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
