export function AppStoreButton() {
  return (
    <a
      href="https://apps.apple.com/us/app/just-one-thing-get-it-done/id6761066689"
      className="inline-flex items-center gap-3 bg-white text-black rounded-[14px] px-5 py-3 hover:bg-neutral-100 transition-colors"
    >
      <svg
        width="20"
        height="25"
        viewBox="0 0 20 25"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.462 13.25c-.028-3.124 2.549-4.628 2.665-4.703-1.454-2.127-3.714-2.418-4.516-2.449-1.92-.196-3.753 1.14-4.727 1.14-.978 0-2.476-1.114-4.077-1.083-2.082.032-4.012 1.223-5.082 3.086C-1.39 13.007.218 18.534 2.31 21.567c1.033 1.496 2.254 3.169 3.86 3.11 1.557-.062 2.141-1.003 4.024-1.003 1.866 0 2.406 1.003 4.041.966 1.674-.028 2.726-1.513 3.742-3.018 1.194-1.725 1.679-3.421 1.701-3.506-.037-.015-3.247-1.25-3.216-4.866zM13.31 4.23C14.148 3.21 14.72 1.81 14.56.39c-1.214.05-2.702.812-3.577 1.815-.784.898-1.475 2.346-1.292 3.72 1.36.105 2.759-.692 3.618-1.694z" />
      </svg>
      <div className="text-left">
        <div className="text-[10px] font-medium leading-tight opacity-75">
          Download on the
        </div>
        <div className="text-[17px] font-semibold leading-tight">App Store</div>
      </div>
    </a>
  )
}
