import React from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled'
import {Viewers, ViewersMessage} from '../css/viewersCSS.js'

function CurrentlyViewing(props) {
  return (
    <Viewers>
      <ViewersMessage>
        <span><i class="fas fa-user-friends"></i></span>
        <span style={{marginRight: 6}}></span>
        <span>{props.viewersMessage}</span>
      </ViewersMessage>
    </Viewers>
  )
}

export default CurrentlyViewing;