import { useState } from 'react';
import { SearchIcon, HeartIcon, ShoppingCartIcon, UserIcon, FlagIcon } from '@heroicons/react/outline';

const ProductSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <FlagIcon className="h-6 w-6 text-blue-600" />
                        <span className="text-xl font-bold">Ozb</span>
                    </div>

                    <div className="flex-1 mx-6">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <SearchIcon className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                                placeholder="Q Mahsulotni izlash"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="p-1 rounded-md hover:bg-gray-100">
                            <HeartIcon className="h-6 w-6 text-gray-600" />
                        </button>
                        <button className="p-1 rounded-md hover:bg-gray-100">
                            <ShoppingCartIcon className="h-6 w-6 text-gray-600" />
                        </button>
                        <button className="p-1 rounded-md hover:bg-gray-100">
                            <UserIcon className="h-6 w-6 text-gray-600" />
                        </button>
                    </div>
                </div>
            </header>

            
            <nav className="bg-white border-t border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="flex space-x-8">
                        <a href="#" className="px-3 py-2 text-sm font-medium text-gray-900 border-b-2 border-blue-600">
                            Kirish
                        </a>
                        <a href="#" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900">
                            Sevimlilar
                        </a>
                        <a href="#" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900">
                            Savatcha
                        </a>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-6">
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Mahsulotlar</h2>
                    <p className="text-gray-500">Qidiruv natijalari shu yerda ko'rsatiladi...</p>
                </div>
            </main>
        </div>
    );
};

export default ProductSearch;