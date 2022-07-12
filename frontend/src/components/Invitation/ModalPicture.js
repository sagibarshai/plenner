import React, { useState } from 'react';
import { FullInput, ImageWrapper, StyledChangePhoto, HiddenInput, MiniConfirm } from './styledComponents';
import GroupLogo from '../../images/svg/GroupLogo.svg';
import FlowersAvatar from '../FlowersAvatar';

export default function ModalPicture({ weddingInfo, editInfo }) {
  const [showImgEdit, setShowImgEdit] = useState(false);

  return (
    <>
      <ImageWrapper>
        <FlowersAvatar imgSrc={weddingInfo.image_url} />
        <StyledChangePhoto onClick={() => setShowImgEdit(true)}>
          <img src={GroupLogo} alt='GroupLogo' />
          <span>Change pic</span>
        </StyledChangePhoto>
      </ImageWrapper>
      <HiddenInput hide={showImgEdit}>
        <FullInput
          type='text'
          onChange={(e) => editInfo('image_url', e.target.value)}
          value={weddingInfo.image_url}
          placeholder='Enter image Source'
          required
        />
        <MiniConfirm onClick={() => setShowImgEdit(false)}>confirm</MiniConfirm>
      </HiddenInput>
    </>
  );
}
