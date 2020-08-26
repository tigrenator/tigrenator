import * as React from 'react';
import { Area } from '../types/Calculator';

export type AreasContext = {
  areas: Area[];
}

export const AreasContext = React.createContext<AreasContext>(null);

export const useAreasContext = () => React.useContext(AreasContext);

export default AreasContext;
