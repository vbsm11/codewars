class SmallestIntegerFinder {
    findSmallestInt(args) {
        let l = args[0];
        for (let i = 1; i < args.length; i++) {
            if (l > args[i]) l = args[i];
        }
        return l;
    }
}