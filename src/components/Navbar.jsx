import { useState } from 'react';
import { MagnifyingGlassIcon, HeartIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import { SiCoinmarketcap } from 'react-icons/si';

const ProductSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                     <SiCoinmarketcap className='text-3xl' />
                        <span className="text-xl font-bold">Market</span>
                    </div>

                    <div className="flex-1 mx-6">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
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



        </div>
    );
};

export default ProductSearch;