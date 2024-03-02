import { User } from "../../../users/models";
import { cursos } from '../../../cursos/models/index';

export interface Inscription {
  id: string | number;
  userId: string | number;
  productId: string | number;
  user?: User;
  course?: cursos;
}

export interface CreateInscriptionData {
  userId: string | number | null;
  inscriptionId: string | number | null;
}
