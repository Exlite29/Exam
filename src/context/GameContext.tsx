import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import type { Game, GameFilters } from '../types';
import { fetchGames } from '../services/gameService';

interface GameContextType {
    games: Game[];
    filteredGames: Game[];
    loading: boolean;
    filters: GameFilters;
    setFilters: React.Dispatch<React.SetStateAction<GameFilters>>;
    toggleFavorite: (gameId: string) => void;
    favorites: string[];
    isProviderModalOpen: boolean;
    setIsProviderModalOpen: (open: boolean) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState<string[]>(() => {
        const saved = localStorage.getItem('favorites');
        return saved ? JSON.parse(saved) : [];
    });
    const [filters, setFilters] = useState<GameFilters>({
        search: '',
        category: 'START',
        provider: 'all',
    });
    const [isProviderModalOpen, setIsProviderModalOpen] = useState(false);

    useEffect(() => {
        const loadGames = async () => {
            setLoading(true);
            try {
                const data = await fetchGames();
                setGames(data);
            } catch (error) {
                console.error('Failed to fetch games', error);
            } finally {
                setLoading(false);
            }
        };
        loadGames();
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (gameId: string) => {
        setFavorites((prev) =>
            prev.includes(gameId) ? prev.filter((id) => id !== gameId) : [...prev, gameId]
        );
    };

    const filteredGames = useMemo(() => {
        return games.filter((game) => {
            const searchLower = filters.search.toLowerCase();
            const matchesSearch =
                game.title.toLowerCase().includes(searchLower) ||
                game.provider.toLowerCase().includes(searchLower);

            const matchesProvider = filters.provider === 'all' || game.provider === filters.provider;

            let matchesCategory = true;
            if (filters.category === 'FAVORITES') {
                matchesCategory = favorites.includes(game.id);
            } else if (filters.category !== 'START') {
                // If not START, check if category matches
                matchesCategory = game.category.includes(filters.category);
            }
            // For 'START', it acts as a "Featured/All" view that still respects search and provider

            return matchesSearch && matchesProvider && matchesCategory;
        });
    }, [games, filters, favorites]);

    return (
        <GameContext.Provider
            value={{
                games,
                filteredGames,
                loading,
                filters,
                setFilters,
                toggleFavorite,
                favorites,
                isProviderModalOpen,
                setIsProviderModalOpen,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};

export const useGameContext = () => {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error('useGameContext must be used within a GameProvider');
    }
    return context;
};
