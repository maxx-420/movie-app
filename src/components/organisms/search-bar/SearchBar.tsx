import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import {useState } from "react";
import "./SearchBar.scss";
import { motion } from "framer-motion";

export default function SearchBar({setSearchQuery }: any) {
  const [searchQuery, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearchToggle = (open: boolean)=> {
    setSearchOpen(open);
    if(!open){
      setQuery('');
      setSearchQuery('');
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSearchQuery(searchQuery);
  };
  return (
    <motion.div className={`search-bar ${searchOpen? 'search-open': ''}`}>
      <IconButton
        className="search-bar__search-button"
        color="inherit"
        aria-label="Open search"
        onClick={()=> handleSearchToggle(true)}
      >
        <SearchIcon fontSize="inherit" />
      </IconButton>
      {searchOpen && (
        <>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="search-bar__search-input no-outline"
              placeholder="Title, Movies, Keyword"
              autoFocus
              value={searchQuery}
              onChange={(e) => setQuery(e.target.value)}
            />
            <input type="submit" hidden />
          </form>

          <IconButton
            className="search-bar__close-button"
            color="inherit"
            aria-label="add to playlist"
            onClick={()=> handleSearchToggle(false)}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </>
      )}
    </motion.div>
  );
}
