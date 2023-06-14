import { ImageInterface } from 'interfaces/image';
import { UserInterface } from 'interfaces/user';
import { ClientInterface } from 'interfaces/client';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  designer_id: string;
  client_id: string;
  created_at?: any;
  updated_at?: any;
  image?: ImageInterface[];
  user?: UserInterface;
  client?: ClientInterface;
  _count?: {
    image?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  designer_id?: string;
  client_id?: string;
}
