{ sources ? import ./nix/sources.nix
, pkgs ? import sources.nixpkgs {}
}:

pkgs.mkShell {
  buildInputs = [
    pkgs.bat
    pkgs.ripgrep
    pkgs.watchexec
    pkgs.caddy
    pkgs.curlie
    pkgs.ijq
    pkgs.jq
    pkgs.croc

    pkgs.git
    pkgs.python310
    pkgs.python310Packages.mercurial
    pkgs.python310Packages.hg-git
  ];
}
