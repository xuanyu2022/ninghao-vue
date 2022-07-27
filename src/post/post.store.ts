import { Module } from 'vuex';
import { RootState } from '../app/app.store';
import {
postCreateStoreModule,
PostCreateStoreState,
} from './create/post-create.store';

export interface PostStoreState {
  create: PostCreateStoreState;
  }
export interface AbcdEfg{
  hah: RootState;
}

export const postStoreModule: Module<PostStoreState, RootState> = {
    namespaced: true,
    modules: {
      create: postCreateStoreModule,
    },
};