import { useState, useEffect } from "react";
import PlaceholderLogo from "../../assets/team-logos/placeholder.jpg";

export interface TableProps {
  items: Array<{
    teamName: string;
    logoUrl?: string;
    victories: number;
    loses: number;
    gamesPlayed: number;
  }>;
}

function Table({ items }: TableProps) {
  const [sortedItems, setSortedItems] = useState<
    Array<{
      teamName: string;
      logoUrl?: string;
      victories: number;
      loses: number;
      gamesPlayed: number;
      position: number;
    }>
  >();

  useEffect(() => {
    const sorted = [...items].sort((a, b) => {
      if (b.victories !== a.victories) {
        return b.victories - a.victories;
      }
      return a.teamName.localeCompare(b.teamName);
    });

    let position = 1;
    let lastVictories = sorted[0].victories;

    const itemsWithPosition = sorted.map((item) => {
      if (item.victories !== lastVictories) {
        position++;
        lastVictories = item.victories;
      }

      return {
        ...item,
        position,
      };
    });

    setSortedItems(itemsWithPosition);
  }, [items]);

  return (
    <div className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
      <table className="w-full whitespace-nowrap text-center">
        <colgroup>
          <col className="w-1/20" />
          <col className="w-3/20" />
          <col className="w-3/20" />
          <col className="w-3/20" />
          <col className="w-3/20" />
        </colgroup>
        <thead className="border-b border-white/10 text-lg leading-6 text-white">
          <tr>
            <th
              scope="col"
              className="py-2 pl-0 pr-4 font-bold text-center sm:pr-8 sm:text-center"
            >
              #
            </th>
            <th
              scope="col"
              className="py-2 pl-4 pr-8 font-bold sm:pl-6 lg:pl-8"
            >
              Equipe
            </th>
            <th
              scope="col"
              className="py-2 pl-0 pr-4 font-bold text-center sm:pr-8 sm:text-center"
            >
              <span className="hidden sm:inline">Jogos</span>
              <span className="sm:hidden">J</span>
            </th>
            <th
              scope="col"
              className="py-2 pl-0 pr-4 font-bold text-center sm:pr-8 sm:text-center"
            >
              <span className="hidden sm:inline">Vitórias</span>
              <span className="sm:hidden">V</span>
            </th>
            <th
              scope="col"
              className="py-2 pl-0 pr-4 font-bold text-center sm:pr-8 sm:text-center"
            >
              <span className="hidden sm:inline">Derrotas</span>
              <span className="sm:hidden">D</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {sortedItems &&
            sortedItems.map((item) => (
              <tr
                key={item.teamName}
                className="transition-all hover:bg-gray-700 cursor-pointer transform hover:scale-95"
              >
                <td className="py-3 pl-0 pr-1 text-center sm:pr-8 sm:text-center">
                  {item.position}
                </td>
                <td className="py-3 pl-4 pr-8 sm:pl-6 lg:pl-8">
                  <div className="flex flex-col items-center justify-center gap-x-3 sm:flex-row">
                    {item.logoUrl ? (
                      <img
                        src={item.logoUrl}
                        alt={`${item.teamName} logo`}
                        draggable={false}
                        className="h-10 w-10 rounded-full"
                      />
                    ) : (
                      <img
                        src={PlaceholderLogo}
                        alt="Placeholder logo"
                        draggable={false}
                        className="h-10 w-10 rounded-full blur-sm"
                      />
                    )}
                    <div className="truncate text-base font-medium leading-6 text-white">
                      {item.teamName}
                    </div>
                  </div>
                </td>
                <td className="py-3 pl-0 pr-4 text-center sm:pr-8 sm:text-center">
                  {item.gamesPlayed}
                </td>
                <td className="py-3 pl-0 pr-4 text-center sm:pr-8 sm:text-center">
                  {item.victories}
                </td>
                <td className="py-3 pl-0 pr-4 text-center sm:pr-8 sm:text-center">
                  {item.loses}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
