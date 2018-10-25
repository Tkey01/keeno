// @flow
import React from 'react';

import { Button } from '../Button';
import { images } from '../../global/index';

type Props = {
  favourite: boolean,
  toggleFavourite: number => void,
  id: number,
};

export const ToggleFavouriteButton = ({
  favourite,
  toggleFavourite,
  id,
}: Props) => (
  <Button
    type="favourite"
    heart={favourite ? images.heartFill : images.heart}
    onPress={() => toggleFavourite(id)}
  >
    {favourite ? 'В избранном' : 'В избранное'}
  </Button>
);
