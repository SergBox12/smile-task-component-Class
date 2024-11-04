import { create } from 'zustand';
import trollFace from '../assets/trollFace.jpg';
import trollFaceShout from '../assets/trollFaceShout.jpg';
import trollFaceFuck from '../assets/trollFaceFuck.jpg';


export const useSmileStore = create((set) => ({

    trollFaceImg: trollFace,
    trollFaceScore: 0,
    increaseScoreTrollFace: () => set((state) => ({ trollFaceScore: state.trollFaceScore + 1 })),
    removeScoreTrollFace: () => set({ trollFaceScore: 0 }),

    trollFaceShoutImg: trollFaceShout,
    trollFaceShoutScore: 0,
    increaseScoreTrollFaceShout: () => set((state) => ({ trollFaceShoutScore: state.trollFaceShoutScore + 1 })),
    removeScoreTrollFaceShout: () => set({ trollFaceShoutScore: 0 }),

    trollFaceFuckImg: trollFaceFuck,
    trollFaceFuckScore: 0,
    increaseScoreTrollFaceFuck: () => set((state) => ({ trollFaceFuckScore: state.trollFaceFuckScore + 1 })),
    removeScoreTrollFaceFuck: () => set({ trollFaceFuckScore: 0 })
  }))