import React from 'react';
import {IconButton as MuiIconButton } from '@material-ui/core';

const IconButton = (props) => {
  const { Component, size, onClick, ...others } = props

  return (
    <MuiIconButton size={size || 'medium'} onClick={onClick} {...others} >
      {Component}
    </MuiIconButton>
  )
}

export default IconButton
