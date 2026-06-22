import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { SpareRequest, RequestStatus } from '@/types';
import { mockRequests } from '@/data/mockData';

interface RequestContextType {
  requests: SpareRequest[];
  selectedId: number | null;
  selectRequest: (id: number) => void;
  addRequest: (request: SpareRequest) => void;
  updateStatus: (id: number, status: RequestStatus) => void;
  addChatMessage: (id: number, message: SpareRequest['chat'][0]) => void;
  updateNotes: (id: number, notes: string) => void;
  filteredRequests: (status: string, search: string) => SpareRequest[];
}

const RequestContext = createContext<RequestContextType | undefined>(undefined);

export function RequestProvider({ children }: { children: ReactNode }) {
  const [requests, setRequests] = useState<SpareRequest[]>(mockRequests);
  const [selectedId, setSelectedId] = useState<number | null>(mockRequests[0]?.id ?? null);

  const selectRequest = useCallback((id: number) => setSelectedId(id), []);

  const addRequest = useCallback((request: SpareRequest) => {
    setRequests((prev) => [request, ...prev]);
  }, []);

  const updateStatus = useCallback((id: number, status: RequestStatus) => {
    setRequests((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
  }, []);

  const addChatMessage = useCallback((id: number, message: SpareRequest['chat'][0]) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, chat: [...r.chat, message] } : r))
    );
  }, []);

  const updateNotes = useCallback((id: number, notes: string) => {
    setRequests((prev) => prev.map((r) => (r.id === id ? { ...r, notes } : r)));
  }, []);

  const filteredRequests = useCallback(
    (status: string, search: string) => {
      return requests.filter((r) => {
        const matchStatus = status === 'all' || r.status === status;
        const term = search.toLowerCase();
        const matchSearch =
          !term || `${r.name} ${r.part} ${r.oem}`.toLowerCase().includes(term);
        return matchStatus && matchSearch;
      });
    },
    [requests]
  );

  return (
    <RequestContext.Provider
      value={{ requests, selectedId, selectRequest, addRequest, updateStatus, addChatMessage, updateNotes, filteredRequests }}
    >
      {children}
    </RequestContext.Provider>
  );
}

export function useRequests() {
  const ctx = useContext(RequestContext);
  if (!ctx) throw new Error('useRequests must be used within RequestProvider');
  return ctx;
}
