import { Logo } from './Logo';

export function LogoVariants() {
  return (
    <div className="space-y-12 p-8">
      {/* Light Background Examples */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Logo on Light Background</h2>
        
        <div className="space-y-4 bg-gray-50 p-8 rounded">
          <div>
            <p className="text-sm text-gray-500 mb-2">Small (sm)</p>
            <Logo size="sm" variant="light" />
          </div>
          
          <div>
            <p className="text-sm text-gray-500 mb-2">Medium (md)</p>
            <Logo size="md" variant="light" />
          </div>
          
          <div>
            <p className="text-sm text-gray-500 mb-2">Large (lg)</p>
            <Logo size="lg" variant="light" />
          </div>
          
          <div>
            <p className="text-sm text-gray-500 mb-2">Extra Large (xl)</p>
            <Logo size="xl" variant="light" />
          </div>
        </div>
      </div>

      {/* Dark Background Examples */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Logo on Dark Background</h2>
        
        <div className="space-y-4 bg-gray-900 p-8 rounded">
          <div>
            <p className="text-sm text-gray-400 mb-2">Small (sm)</p>
            <Logo size="sm" variant="dark" />
          </div>
          
          <div>
            <p className="text-sm text-gray-400 mb-2">Medium (md)</p>
            <Logo size="md" variant="dark" />
          </div>
          
          <div>
            <p className="text-sm text-gray-400 mb-2">Large (lg)</p>
            <Logo size="lg" variant="dark" />
          </div>
          
          <div>
            <p className="text-sm text-gray-400 mb-2">Extra Large (xl)</p>
            <Logo size="xl" variant="dark" />
          </div>
        </div>
      </div>
    </div>
  );
}