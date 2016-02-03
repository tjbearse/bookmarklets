#!/usr/bin/env perl
my $str = do { local $/; <> };
$str =~ s/\s+/ /g;
print <<"EOF"
javascript:(function(){$str})();
EOF
