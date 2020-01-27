import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 py-2">
      <div className="container mx-auto px-2">
        <svg className="w-6 text-white fill-current" viewBox="0 0 24 24">
          <path d="M6 12h10v1H6v-1zm7.816-3H6v1h9.047a6.547 6.547 0 01-1.231-1zM6 7h6.5a6.472 6.472 0 01-.319-1H6v1zm13 3.975v2.568C19 17.65 13 16 13 16s1.518 6-2.638 6H3V2h9.5a6.501 6.501 0 011.316-2H1v24h10.189C14.352 24 21 16.777 21 14.386V10.5a6.475 6.475 0 01-2 .475zM23 4.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.156-.882l-.696-.696-2.116 2.169-.992-.941-.696.697 1.688 1.637 2.812-2.866z" />
        </svg>
      </div>
    </header>
  );
};

export default Header;
