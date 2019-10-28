import { Track } from './track'

export interface Album {
  name: string,
  releasedate: string,
  coverimage: string,
  tracks: Track[]
  }
