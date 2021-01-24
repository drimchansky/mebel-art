import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'

const CustomBreadcrumbs = ({ currentPage, previousPage, previousUrl }) => {

  return (
    <Breadcrumbs aria-label="breadcrumb" style={{ marginTop: 20 }}>
      <Link color="inherit" href="/">
        МЕБЕЛЬ АРТ
      </Link>
      {previousPage && <Link color="inherit" href={previousUrl}>{previousPage}</Link>}
      <Typography color="textPrimary">{currentPage}</Typography>
    </Breadcrumbs>
  )
}

CustomBreadcrumbs.propTypes = {
  currentPage: PropTypes.string,
  previousPage: PropTypes.string,
  previousUrl: PropTypes.string,
}

export default CustomBreadcrumbs
