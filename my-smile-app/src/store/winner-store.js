import { create } from 'zustand';

export const useWinnerStore = create((set) => ({

    winner: '',
    updateWinner: (newWinner) => set({ winner: newWinner }),

  }))