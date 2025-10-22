export const RightPanelCategoryList = () => (
    <div className="flex-col gap-2 text-sm">
        {/* Category List */}
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-400">Entertainments</span>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">46%</span>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-400">Platform</span>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">56%</span>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-400">Shopping</span>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">48%</span>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-400">Food & health</span>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">63%</span>
            </div>
        </div>
    </div>
);