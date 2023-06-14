import { ProjectInterface } from 'interfaces/project';
import { GetQueryInterface } from 'interfaces';

export interface ImageInterface {
  id?: string;
  url: string;
  project_id: string;
  created_at?: any;
  updated_at?: any;

  project?: ProjectInterface;
  _count?: {};
}

export interface ImageGetQueryInterface extends GetQueryInterface {
  id?: string;
  url?: string;
  project_id?: string;
}
