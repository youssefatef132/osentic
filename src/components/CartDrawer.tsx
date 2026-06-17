import { X, Trash2, ShoppingBag } from 'lucide-react';
import IrisLogo from './IrisLogo';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: number) => void;
}

export default function CartDrawer({ isOpen, onClose, items, onRemove }: CartDrawerProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 transition-opacity duration-500"
        style={{
          background: 'rgba(10,10,10,0.6)',
          backdropFilter: 'blur(4px)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm flex flex-col"
        style={{
          background: 'linear-gradient(180deg, #fdfaf5, #f5f0e8)',
          borderLeft: '1px solid rgba(201,168,76,0.2)',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.5s cubic-bezier(0.23,1,0.32,1)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b" style={{ borderColor: 'rgba(201,168,76,0.15)' }}>
          <div className="flex items-center gap-3">
            <IrisLogo size={28} id="cart-header" />
            <div>
              <p className="font-serif font-light text-xl text-obsidian">Your Selection</p>
              <p className="text-[9px] tracking-ultra-wide uppercase font-sans text-obsidian/40">
                {items.length} {items.length === 1 ? 'item' : 'items'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-obsidian/50 hover:text-obsidian transition-colors duration-200"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <ShoppingBag size={32} strokeWidth={1} className="text-obsidian/20 mb-4" />
              <p className="font-serif font-light text-xl text-obsidian/40 mb-2">Your cart is empty</p>
              <p className="font-sans font-light text-xs text-obsidian/30">
                Discover our collection
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-5 border-b"
                  style={{ borderColor: 'rgba(201,168,76,0.1)' }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 flex items-center justify-center"
                      style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)' }}
                    >
                      <IrisLogo size={22} id="cart-item" />
                    </div>
                    <div>
                      <p className="font-serif font-light text-base text-obsidian">{item.name}</p>
                      <p className="text-[9px] tracking-widest uppercase font-sans text-obsidian/40 mt-0.5">
                        Qty {item.quantity} · 50ml
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-lg font-light text-obsidian">
                      EGP {item.price * item.quantity}
                    </span>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="text-obsidian/30 hover:text-red-400 transition-colors duration-200"
                    >
                      <Trash2 size={13} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-8 py-6 border-t" style={{ borderColor: 'rgba(201,168,76,0.15)' }}>
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs tracking-ultra-wide uppercase font-sans text-obsidian/50">Total</span>
              <span className="font-serif font-light text-2xl text-obsidian">EGP {total}</span>
            </div>
            <button
              className="w-full btn-gold-solid text-center"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <span>Proceed to Checkout</span>
            </button>
            <p className="text-center text-[9px] tracking-wide font-sans text-obsidian/30 mt-4">
              Complimentary shipping · Luxury packaging
            </p>
          </div>
        )}
      </div>
    </>
  );
}
